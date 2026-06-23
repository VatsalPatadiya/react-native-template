#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

console.log('🔄 Fetching the latest React Native version from npm registry...');

function getLatestVersion() {
  return new Promise((resolve) => {
    https.get('https://registry.npmjs.org/react-native/latest', (res) => {
      if (res.statusCode !== 200) {
        resolve(null);
        return;
      }
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({
            reactNativeVersion: json.version,
            reactVersion: json.peerDependencies.react,
            typesReactVersion: json.peerDependencies['@types/react'] || '^19.1.0'
          });
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => {
      resolve(null);
    });
  });
}

async function run() {
  const latest = await getLatestVersion();
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    console.error('❌ Could not find package.json in the current working directory.');
    process.exit(1);
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  let reactNativeVersion = '0.83.1'; // Fallback
  let reactVersion = '19.2.0';       // Fallback
  let typesReactVersion = '^19.1.0';  // Fallback

  if (latest) {
    reactNativeVersion = latest.reactNativeVersion;
    // Clean react version (e.g. ^19.2.3 -> 19.2.3)
    reactVersion = latest.reactVersion.replace(/[\^~]/g, '');
    typesReactVersion = latest.typesReactVersion.replace(/[\^~]/g, '');
    console.log(`✅ Fetched latest versions: react-native@${reactNativeVersion}, react@${reactVersion}`);
  } else {
    console.log(`⚠️ Failed to fetch from npm registry. Falling back to default: react-native@${reactNativeVersion}, react@${reactVersion}`);
  }

  // Update dependencies
  if (packageJson.dependencies) {
    if (packageJson.dependencies['react-native']) {
      packageJson.dependencies['react-native'] = reactNativeVersion;
    }
    if (packageJson.dependencies['react']) {
      packageJson.dependencies['react'] = reactVersion;
    }
  }

  // Update devDependencies
  if (packageJson.devDependencies) {
    const reactNativeDevDeps = [
      '@react-native/babel-preset',
      '@react-native/eslint-config',
      '@react-native/metro-config',
      '@react-native/typescript-config'
    ];

    reactNativeDevDeps.forEach(dep => {
      if (packageJson.devDependencies[dep]) {
        packageJson.devDependencies[dep] = reactNativeVersion;
      }
    });

    if (packageJson.devDependencies['react-test-renderer']) {
      packageJson.devDependencies['react-test-renderer'] = reactVersion;
    }

    if (packageJson.devDependencies['@types/react']) {
      packageJson.devDependencies['@types/react'] = `^${typesReactVersion}`;
    }

    if (packageJson.devDependencies['@types/react-test-renderer']) {
      packageJson.devDependencies['@types/react-test-renderer'] = `^${typesReactVersion}`;
    }
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n', 'utf8');
  console.log('✅ Successfully updated package.json with latest React Native and React versions!');
}

run().catch((err) => {
  console.error('❌ Error executing postInitScript:', err);
  process.exit(1);
});

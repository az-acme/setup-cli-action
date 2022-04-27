const { file } = require('@babel/types');
const os = require('os');
const path = require('path');

// arch in [arm, x32, x64...] (https://nodejs.org/api/os.html#os_os_arch)
// return value in [amd64, 386, arm]
function mapArch(arch) {
  const mappings = {
    x32: '386',
    x64: 'x64'
  };
  return mappings[arch] || arch;
}

// os in [darwin, linux, win32...] (https://nodejs.org/api/os.html#os_os_platform)
// return value in [darwin, linux, windows]
function mapOS(os) {
  const mappings = {
    win32: 'windows',
    win64: 'windows',
    darwin: 'macos'
  };
  return mappings[os] || os;
}

function getDownloadObject(version) {
  const platform = os.platform();

  console.log('Platform is ' + platform);

  const osType = mapOS(platform);

  console.log('OS Type is ' + osType);

  const filename = `cli_${ version }_${ osType }_${ mapArch(os.arch()) }`;

  console.log('Filename is ' + filename);

  const extension = osType === 'windows' ? 'zip' : 'tar.gz';
  const binPath = filename;
  const url = `https://github.com/az-acme/az-acme-cli/releases/download/${ version }/${ filename }.${ extension }`;
  return {
    url,
    binPath
  };
}

module.exports = { getDownloadObject }

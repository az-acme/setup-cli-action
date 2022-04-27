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
    win32: 'win',
    win64: 'win',
    darwin: 'osx'
  };
  return mappings[os] || os;
}

function getDownloadObject(version) {
  const platform = os.platform();
  const osType = mapOS(platform);
  const filename = `cli-v${ version }-${ osType }-${ mapArch(os.arch()) }`;
  const extension = osType === 'win' ? 'zip' : 'tar.gz';
  const binPath = platform === 'win' ? '' : filename;
  const url = `https://github.com/az-acme/az-acme-cli/releases/download/v${ version }/${ filename }.${ extension }`;

  console.log('Download from ' + url)

  return {
    url,
    binPath
  };
}

module.exports = { getDownloadObject }

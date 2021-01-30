import child_process from 'child_process';
import util from 'util';

export default async function getSecret(/** @type {string} */ account, /** @type {string} */ service) {
  const { stdout } = await util.promisify(child_process.exec)(`/usr/bin/security find-generic-password -a ${account} -s ${service} -w`);
  return stdout.trim();
}

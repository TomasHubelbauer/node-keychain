import child_process from 'child_process';
import util from 'util';

export default async function setSecret(/** @type {string} */ account, /** @type {string} */ service, /** @type {string} */ password) {
  await util.promisify(child_process.exec)(`/usr/bin/security add-generic-password -a ${account} -s ${service} -w ${password}`);
}

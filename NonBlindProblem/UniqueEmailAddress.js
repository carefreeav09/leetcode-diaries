/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let validLocalNames = [];

  for (e of emails) {
    let split = e.split("@");
    if (split.length > 2) {
      break;
    }
    let domain = split[1];
    let localname = split[0];
    let prePlus = localname.split("+")[0];
    let shortenedURL = prePlus.replaceAll(".", "");
    let testEmail = shortenedURL + "@" + domain;
    if (validLocalNames.includes(testEmail)) {
      continue;
    } else {
      validLocalNames.push(`${shortenedURL}@${domain}`);
    }
  }

  return validLocalNames.length;
};

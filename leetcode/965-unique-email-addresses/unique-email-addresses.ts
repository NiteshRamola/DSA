function numUniqueEmails(emails: string[]): number {
    const result: Set<string> = new Set();
    for(let email of emails){
      let [local, domain] = email.split('@');
        local = local.split('+')[0];
        local = local.split('.').join('');
        result.add(local + '@' + domain);
    }

    return result.size;
};
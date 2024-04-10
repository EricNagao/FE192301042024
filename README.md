# FE192304032024

Curso Front-End Impacta, start 01/04/2024

## HTML

## Links:

- GitHub: https://github.com/celsobastos/FE192301042024
- https://www.w3.org/

## Referencia para estudo

- https://developer.mozilla.org/en-US/
- https://www.w3schools.com/


## Test - bug gitHub
https://stackoverflow.com/questions/7438313/pushing-to-git-returning-error-code-403-fatal-http-request-failed

Same error and resolution on Mac OS X.

Everything was working fine till I created a new account on GitHub and tried to push

$ git push -u origin master
And got the error:

remote: Permission to NEWUSER/NEWREPO.git denied to OLDUSER. fatal: unable to access ‘https://github.com/NEWUSER/NEWREPO.git/': The requested URL returned error: 403

It should have fixed by setting the user.name either for global or current repo

$ git config –-global user.name NEWUSER
$ git config user.name NEWUSER
But it didn’t.

I got it fixed by deleting the OLDUSER associated with GitHub from Keychain Access app under Passwords section. Then the push command went successful.

$ git push -u origin master

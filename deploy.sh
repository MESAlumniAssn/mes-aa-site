#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'main' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  rsync -a .next package.json package-lock.json public travis@143.244.132.151:/home/mesalumni/mesalumni-site
  echo "Deployed successfully!"
else
  echo "Not deploying, since the branch isn't main."
fi

ssh travis@143.244.132.151 'pm2 restart all' --update-env

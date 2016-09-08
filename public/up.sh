if ember build -e production; then
  printf 'Build successful.\n'
  if rm -rf ../remote-hub/*; then
    # rm -rf ../remote-hub/.git
    if cp -Rf dist/* ../remote-hub; then
      cp .travis.yml ../remote-hub/
      cd ../remote-hub
      # git init
      git clone git@github.com:Kuzirashi/remote.git .
      git fetch --all
      git checkout gh-pages
      git add -A
      # git remote add origin git@github.com:Kuzirashi/kuzirashi.github.io.git
      git commit -m 'Changes'
      if git push origin gh-pages -u; then
        printf 'Finished!\n'
      fi
    fi
  else
    printf 'Cant remove directory.\n'
  fi
else
  printf 'Build failed.\n'
fi

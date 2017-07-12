npm install -g now
echo "deploying..."
URL=$(now --docker -t $prueba_token)
echo "running accept on $URL"
curl --silent -L $URL  


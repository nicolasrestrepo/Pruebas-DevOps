npm install -g now
echo "deploying..."
URL=$(now --docker -t $PRUEBA_DEV)
echo "running accept on $URL"
curl --silent -L $URL  


1. ```chmod +x sshtexec.sh```.
2. ```ln -s ...full_path_to_sshtexec.sh /usr/local/bin/sshtexec```.
3. ```sshtexec -e=dev -u=www-data sh /var/www/api.shamandev.com/deploy.sh```
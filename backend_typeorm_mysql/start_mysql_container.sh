echo "Starting mysql container..."
sudo docker run --rm -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root --name mysql_container mysql

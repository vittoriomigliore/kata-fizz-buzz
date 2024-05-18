.PHONY: install test

install:
	docker-compose run main npm install

start:
	docker-compose run main npm start

test:
	docker-compose run main npm test

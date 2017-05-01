.PHONY: run deploy

run:
	dev_appserver.py .

deploy:
	gcloud app deploy

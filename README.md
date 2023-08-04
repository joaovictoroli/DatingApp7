# DatingApp trainning from Udemy by Neil Cummings

# How to run the project?

## API Folder:
## ⌂ Add and configure appsettings.json:
	{
	  "Logging": {
	    "LogLevel": {
	      "Default": "Information",
	      "Microsoft.AspNetCore": "Warning"
	    }
	  },
	  "ConnectionStrings": {
	    "DefaultConnection": "Data source=datingapp.db"
	  },
	  "Tokenkey": "super secret unguessable key",
	  "CloudinarySettings": {
	    "CloudName": "cloudinaryCloudName",
	    "ApiKey": "cloudinaryApiKey",
	    "ApiSecret": "cloudinaryApiSecret"
	  }
	}

# In some cases will be necessary to: 
	PROMPT: 
	PS TrainningProject\DatingApp7-master> cd api
	PS TrainningProject\DatingApp7-master\api> dotnet add package Microsoft.EntityFrameworkCore
 	PS TrainningProject\DatingApp7-master\api> dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore

 	

## Client Folder:
	PROMPT: 
	TrainningProject\DatingApp7-master> cd client
	TrainningProject\DatingApp7-master\client> npm install -g @angular/cli@14.2.5
	TrainningProject\DatingApp7-master\client> npm install --force

# Contrive AWS Setup

In order to have image upload functionality for the Contrive app, please follow the instructions in this document. The necessary elements that you will set up are AWS S3, and the file-upload Dropzone.

## Setup

#### 1. Go to: console.aws.amazon.com

#### 2. Register to create an account

#### 3. We need to setup S3 and security permissions:

    3a. To get to S3 from the dashboard, click on All Services to find Storage and click on S3. (Or go to the URL : ‘https://s3.console.aws.amazon.com/s3/')

    3b. Click Create Bucket (as of 12/6/2020 - it’s an orange button near the top right corner)

    3c. Name your bucket

    3d. Select a region (whatever would be closest to your location) and remember what you selected to use in step #9

    3e. For now, disregard all the other options and leave the default selections - scroll to the bottom of the page and click Create Bucket

![image](https://user-images.githubusercontent.com/71994152/114344673-de439b80-9b25-11eb-9fb1-e088d497dbd1.png)

#### 4. Click on your new bucket and find the Permissions tab:

    4a. The first option is Block public access (bucket setting) - click Edit and choose to turn OFF blocking all public access (so it looks like below). There will be a model that requires you to type confirm - go ahead and do that.

![image](https://user-images.githubusercontent.com/71994152/114344914-57db8980-9b26-11eb-818a-667611fb5c30.png)

    4b. Then, still in Permissions, scroll down to find Cross-Origin Resource Sharing (CORS) and click EDIT
    4c. Copy and paste this code into the CORS textbox
    ```
    [
        {
          "AllowedHeaders": [
            "*"
          ],
          "AllowedMethods": [
            "PUT",
            "POST",
            "GET"
          ],
          "AllowedOrigins": [
            "*"
          ],
          "ExposeHeaders": []
      }
    ]
    ```

#### 5. Go to console.aws.amazon.com/iam

    5a. Click on Groups link under Access Management

    5b. Click on Create New Group

    5c. Name the group (anything of your choosing)

    5d. The next page should be titled Attach Policy - check the box for AmazonS3FullAccess

    5e. The next page should give you the option to Create Group

#### 6. Back on the dashboard page, click on Users link under Access

    6a. Click on Add User

    6b. Name the user (anything of your choosing)

    6c. Under Access Type check the Programmatic Access box

    6d. The next page, give this user access to the group we just created

    6e. You can skip the Tags portion

    6f. Review and click Create User

    6g. This next page has our access keys!

![image](https://user-images.githubusercontent.com/71994152/114346325-e3561a00-9b28-11eb-994f-d00c16fa041f.png)

#### 7. Click [Show] for the Secret Access Key and copy and paste them into the .env file in the root folder of your local Contrive repository.

    7a. Copy and paste the URL of your bucket into the REACT_APP_S3_URL as well.

![image](https://user-images.githubusercontent.com/71994152/114347034-f7e6e200-9b29-11eb-9af4-1bf6412147c2.png)

#### 8. Go to the ImageUpload component in the application and open ImageUpload.jsx.

    8a. Update this code as needed.
    8b. Change (server: 'http://localhost:5000') as needed to the website you deploy to.

![image](https://user-images.githubusercontent.com/71994152/114349980-3088ba80-9b2e-11eb-8e0b-8a497efd4487.png)

#### 9. Go to the server.js component in the application.

    9a. Scroll down and find // AWS Configuration //
    9b. Adjust (bucket: 'your-bucket-name') and (region: 'your-region-number') to match your bucket name and region selected.

![image](https://user-images.githubusercontent.com/71994152/114349937-28307f80-9b2e-11eb-9099-238ed345de49.png)

## 10. Set up completed

NOW YOU CAN TEST!!
Drag an image to the uploader and it should make a POST request to your bucket, and a GET request to get the preview.
Check your bucket on AWS as well to see that the image has been uploaded.

## Pricing
#### Startup
At the startup, you may use the AWS Free Tier, upon sign-up new AWS customers receive 5GB of Amazon S3 storage in the S3 Standard storage class; 20,000 GET Requests; 2,000 PUT, COPY, POST, or LIST Requests; and 15GB of Data Transfer Out each month for one year.

#### Estimates
We are estimating about 10 images on average per user and each image is limited to 10 MB per image, thought most images will be around 1 MB.

For every 10000 users there will be an estimated 100 GB of images which would sit at $2.30 a month.

AWS pricing calculator can be found at https://calculator.aws/#/createCalculator/S3?nc2=h_ql_pr_calc

#### Static Costs
Once getting out of AWS Free Tier, there is base costs for a couple of factors while using S3, Storage, request and data retrievals, data transfer, and other optional features such as management and analytics, replication and S3 Object Lambda.

For general storage (calculated monthly), every 100 GB is $2.30 for the first 50 TB, then it is $2.20 for the next 450 TB , and down to $2.10 for anything over 500 TB.

PUT and POST - Whenever a user adds/updates a picture to your Bucket, it is a post request, every 1000 posts is $0.005.
GET - Whenever a user goes to a profile page or uses the search functionality that returns a picture from your Bucket, it creates a GET request, every 1000 gets is $0.0004.

More Information on other features can be found at https://aws.amazon.com/s3/pricing/

## HEROKU SETUP
To set up Heroku, type in your terminal
$ heroku create

In a browser go to https://devcenter.heroku.com/articles/s3-upload-node and scroll down to Heroku Setup

![image](https://user-images.githubusercontent.com/71994152/116499225-478b1480-a871-11eb-9b61-27c7a59d9c05.png)

and copy:
$ heroku config:set AWS_ACCESS_KEY_ID=xxx AWS_SECRET_ACCESS_KEY=yyy Insert your own keys and execute in the terminal

To double check, you can go to Heroku.com and click into your app. Go to settings, and under the Config option, click the Reveal Config Vars button. Your keys should be there.

Now we need to add postgres to our Heroku app. In the terminal, paste: $ heroku addons:create heroku-postgresql:hobby-dev
You can go back to the app on Heroku and in the Reveal Config Vars, the new database information should be there.

Back in the code, in our ImageUpload component, we need to update the location of the server. We can just updated the location of your server in the uploadOptions to be an empty object and remove the uploadOptions variable

![image](https://user-images.githubusercontent.com/71994152/116499478-dc8e0d80-a871-11eb-8118-5c2906e67824.png)

Next, we’re going to update this to use an environment variable, instead of harding that s3Url information directly to the component.
Go to your .env file and add 1 more variables, REACT_APP_S3_URL (REACT_APP is required, the rest is for your chosing), and update it with the correct information (example: 'https://contrive.s3.amazonaws.com')

![image](https://user-images.githubusercontent.com/71994152/116499920-f845e380-a872-11eb-9572-3b6ef2110e5f.png)

Back in the component, update the s3Url variable to point to that new .env variable, like the image below:
![image](https://user-images.githubusercontent.com/71994152/116499988-2c210900-a873-11eb-8517-1885a8f58162.png)

(you will need to restart your client and server to get this working!)
Then push to Git and then Heroku $ git push heroku main
Once it has successfully deployed, refresh your heroku app and try to upload an image SUCCESS!!

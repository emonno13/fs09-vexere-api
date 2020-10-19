# Deploy intruction

### Branch new-master for good file structure
## Mongo|Atlas
Login at https://www.mongodb.com/cloud/atlas

Create new cluster in mongo atlas
![image](https://user-images.githubusercontent.com/53046415/96476866-febe2780-125f-11eb-8949-06ad1b1f5ded.png)

If you can not, do this : New project → Type project name → Next Create free cluster

Click Database access → Create new user 
Click Network access → Add ip whitelist entry

![image](https://user-images.githubusercontent.com/53046415/96477918-472a1500-1261-11eb-8b96-eaf0b96979b6.png)
![image](https://user-images.githubusercontent.com/53046415/96478024-632db680-1261-11eb-88af-e076aacc2ad3.png)

Choose "Connect your application"

Copy link & paste to .env file

![image](https://user-images.githubusercontent.com/53046415/96478233-a425cb00-1261-11eb-8f8e-95fefcb9545c.png)

Build: yarn start:staging

Test Postman with staging port

![image](https://user-images.githubusercontent.com/53046415/96478306-bacc2200-1261-11eb-87b8-d63100ade60a.png)

## Git
create .gitignore file
git remove -v : check remote paths
git config - - local user.email "123@gmail.com"

## Heroku
Open Terminal:
- npm install -g heroku
- heroku -v
Open new terminal at project root folder
- heroku login || heroku login -i

![image](https://user-images.githubusercontent.com/53046415/96484258-7a22d780-1266-11eb-88ba-e0a1da7b6041.png)
Go Dashboard → Create new app

![image](https://user-images.githubusercontent.com/53046415/96485444-c9690800-1266-11eb-8691-8d5c4a19cfa1.png)
![image](https://user-images.githubusercontent.com/53046415/96485869-e30a4f80-1266-11eb-960e-377947ef162b.png)

git remove -v: check remote paths again ( in terminal )
make sure your github have no .lock file && package.json ( .gitignore )
git push heroku master ( in terminal )

![image](https://user-images.githubusercontent.com/53046415/96487667-557b2f80-1267-11eb-8019-a0e93364006b.png)
![image](https://user-images.githubusercontent.com/53046415/96487869-67f56900-1267-11eb-8e20-3eb6506a9ea7.png)

heroku logs --tail ( in terminal ) : check errors
Go Dashboard → app → settings → config vars

![image](https://user-images.githubusercontent.com/53046415/96488150-c15d9800-1267-11eb-9f1a-ce1ff303fbbf.png)
Check again
![image](https://user-images.githubusercontent.com/53046415/96488276-e94cfb80-1267-11eb-85fe-01ff5a9366d6.png)

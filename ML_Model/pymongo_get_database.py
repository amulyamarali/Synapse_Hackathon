from pymongo import MongoClient
# mongodb+srv://AmulyaMarali:NJTpsBLmCYu9M9AL@synapse.ddagbpr.mongodb.net/test

def get_database():
	CONNECTION_STRING='mongodb+srv://KarthikNamboori:jEowXTygnO34kkNA@webtechprojectclass.hkblu6f.mongodb.net/test'

	client = MongoClient(CONNECTION_STRING)

	return client['synapse']

if __name__=='__main__':
	dbname=get_database()


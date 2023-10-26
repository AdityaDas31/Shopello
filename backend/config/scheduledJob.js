const cron = require('node-cron');
const MongoClient = require('mongodb').MongoClient;

const dotenv = require('dotenv');

dotenv.config({ path: "backend/config/config.env" });

async function runScheduledJob() {
    try {
        const client = await MongoClient.connect(process.env.DB_URL, { useNewUrlParser: true });
        const db = client.db();
        // console.log(`Connected to database ${data.connection.host}`);

        // Calculate the cutoff time (10 minutes ago)
        const tenMinutesAgo = new Date();
        tenMinutesAgo.setMinutes(tenMinutesAgo.getMinutes() - 10);

        const result = await db.collection('userotps').deleteMany({
            createdAt: { $lt: tenMinutesAgo },
        });

        console.log(`Deleted ${result.deletedCount} expired OTPs`);
        client.close();
    } catch (error) {
        console.error(err);
    }

    cron.schedule('* * * * *', runScheduledJob);

}
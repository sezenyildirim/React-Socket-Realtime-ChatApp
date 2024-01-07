const redis = require("redis");

const getClient = () => {
	return redis.createClient({
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
		password: process.env.REDIS_PASS,
		db: 1,
	});
};


const clearRedisData = () => {
	const client = getClient();

	client.flushdb((err, success) => {
		if (err) {
			console.error('Redis veritabanı temizleme hatası:', err);
		} else {
			console.log('Redis veritabanı temizlendi.');
		}

		// Bağlantıyı kapat
		client.quit();
	});
};

// Redis veritabanındaki verileri temizle
clearRedisData();


module.exports.getClient = getClient;

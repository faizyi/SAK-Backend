const whiteList = ["http://localhost:3000", "https://sak-shop-ecommerce.vercel.app/" ];
const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

export default corsOptions;
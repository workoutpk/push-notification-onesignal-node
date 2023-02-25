
const OneSignal = require('@onesignal/node-onesignal');
const configuration = OneSignal.createConfiguration({
    userKey: 'e4df41d1-57af-480d-aa8f-c979cee8f09e',
    appKey: 'ZjU5ODdjNGItYzc0ZS00YzJhLTgzNzktMmM2MjQ1MTBiOWYw',
});

const client = new OneSignal.DefaultApi(configuration);
var bunyan = require('bunyan');
var log = bunyan.createLogger({ name: "onesignal .." });
const sdk = require('api')('@onesignal/v9.0#1g2uuailbwvyjvk');


exports.sendNotification = async (req, res) => {

    try {      
        log.info("working  ...")
        const notification = new OneSignal.Notification();
        notification.app_id = "e4df41d1-57af-480d-aa8f-c979cee8f09e";
        // Name property may be required in some case, for instance when sending an SMS.
        notification.name = "test_notification_name";
        notification.include_player_ids =['590168f0-b1e1-4d37-8d5c-47fca7ef2d47']
        notification.contents = {
            "tr": "Yeni bildirim",
            "en": "New notification"
        }
        // required for Huawei
        notification.headings = {
        en: "You Have New Order !!"
        }
        const notification1 = await client.createNotification(notification);
        res.status(200).json({ message: "Success !!" });
    } catch (e) {
        
        res.status(400).json({ message: "Failure !!", error: e });
    }
}





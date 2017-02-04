/**
 * Created by Samuel on 2/3/2017.
 */
var express = require('express');
var router = express.Router();
var states = [{
    region_code: "AK",
    region_name: "Alaska",
    description: `Alaska is a U.S. state located in the northwest extremity of North America. 
    The Canadian administrative divisions of British Columbia and Yukon border the state to the east; 
    its most extreme western part is Attu Island; it has a maritime border with Russia to the west across the Bering Strait. 
    To the north are the Chukchi and Beaufort seas–the southern parts of the Arctic Ocean. The Pacific Ocean lies to the south and southwest. 
    Alaska is the largest state in the United States by area, the 3rd least populous and the least densely populated of the 50 United States. 
    Approximately half of Alaska's residents (the total estimated at 738,432 by the U.S. Census Bureau in 2015) live within the Anchorage metropolitan area. 
    Alaska's economy is dominated by the fishing, natural gas, and oil industries, resources which it has in abundance. Military bases and tourism are also a significant part of the economy.`
    ,
    map_image: "alaska.png"
}, {
    region_code: "AL",
    region_name: "Alabama",
    description: `Alabama is a state in the southeastern region of the United States. 
    It is bordered by Tennessee to the north, Georgia to the east, Florida and the Gulf of Mexico to the south,
     and Mississippi to the west. Alabama is the 30th-most extensive and the 24th-most populous of the U.S. states.
      At nearly 1,500 miles (2,400 km), Alabama has one of the nation's longest navigable inland waterways.`,
    map_image: "alabama.png"
}, {
    region_code: "AR",
    region_name: "Arkansas",
    description: `Arkansas  is a state located in the southeastern region of the United States.
     Its name is of Siouan derivation from the language of the Osage denoting their related kin, the Quapaw Indians.
      The state's diverse geography ranges from the mountainous regions of the Ozark and the Ouachita Mountains, which make up the U.S. 
      Interior Highlands, to the densely forested land in the south known as the Arkansas Timberlands, 
      to the eastern lowlands along the Mississippi River and the Arkansas Delta.`,
    map_image: "arkansas.png"

}];
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(states);
});

router.get('/state', function (req, res, next) {
    var regionCode = req.query.region_code;
    var filtered = states.filter(function (it) {
        return it.region_code == regionCode;
    });


    res.send(filtered);
});

module.exports = router;

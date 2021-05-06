const publishersData = require('../../data/publisher/publishersData');

exports.getPublishers = function() {
    return publishersData.getPublishers();
}

exports.getPublisher = function(ID) {
    return publishersData.getPublisher(publisherID);
}

exports.deletePublisher = function (publisherID) {
    return publishersData.deletePublisher(publisherID);
}

exports.savePublisher = function (publisher) {
    return publishersData.savePublisher(publisher);
}
'use strict';

// Mock data
// ===========================================================
var words = [
    {
        "id": 1,
        "word": "เพื่อน",
        "translate": "เกลอ"
    },
    {
        "id": 2,
        "word": "เพื่อนรัก",
        "translate": "พวกพ้อง"
    },
    {
        "id": 3,
        "word": "เกลอ",
        "translate": "คนสองคนสนิทกัน"
    },
    {
        "id": 4,
        "word": "สองเกลอกัน",
        "translate": "คนรักกัน"
    },
    {
        "id": 5,
        "word": "film",
        "translate": "movie"
    }
];

// Public functions
// ===========================================================
var
    _fetchWords = function() {
        return words;
    };

// Exports
// ===========================================================
module.exports = {
    FetchWords: _fetchWords
}
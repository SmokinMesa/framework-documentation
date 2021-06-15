import Vue from 'vue';
import $dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';


Vue.filter('formatNumberWithCommas', function(value) {
    if (!isNaN(value)) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
});

Vue.filter('unslug', function(slug) {
    let regexp = /[_,\- ]+/;
    if(slug && isNaN(slug)) {
        let words = slug.split(regexp);

        for (var i = 0; i < words.length; i++) {
            let word = words[i];
            words[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }

        return words.join(' ');
    } else {
        return slug;
    }
});

Vue.filter('slugify', function(value) {
    if (value) {
        value = value.replace(/^\s+|\s+$/g, '');

        // Make the string lowercase
        value = value.toLowerCase();

        // Remove accents, swap ñ for n, etc
        var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
        var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
        for (var i=0, l=from.length ; i<l ; i++) {
            value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        // Remove invalid chars
        value = value.replace(/[^a-z0-9 -]/g, '')
        // Collapse whitespace and replace by -
        .replace(/\s+/g, '-')
        // Collapse dashes
        .replace(/-+/g, '-');

        return value;
    }
});

Vue.filter('truncate' , function(value) {
    if (value) {
        return (value.length > 150) ? value.substr(0, 150 - 1) + '...' : value;
    }
});

Vue.filter('titlecase', function(value) {
    if (value) {
        return value.replace(/\w\S*/g, function (value) {
            return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
        });
    }
});

Vue.filter('uppercase', function(value) {
    if (value) {
        return value.toUpperCase() ;
    }
});

Vue.filter('formatVrm', function(value) {
    if (value) {
        return   value.substr(0, 4) + ' ' + value.substr(4);
    }
});

Vue.filter('formatNumber', function(value) {
    if (!isNaN(value)) {
        return  parseFloat(value).toLocaleString('en-GB', { maximumFractionDigits: 0});
    }
});

Vue.filter('formatDate', function(value) {
    $dayjs.extend(advancedFormat);
    if (value) {
        return $dayjs(value).format('Do MMM YYYY');
    }
});


Vue.filter('formatDayMonth', function(value) {
    $dayjs.extend(advancedFormat);
    if (value) {
        return $dayjs(String(value)).format('dddd Do MMMM')
    }
});

Vue.filter('formatDayMonthTime', function(value) {
    $dayjs.extend(advancedFormat);
    if (value) {
        return $dayjs(String(value)).format('dddd Do MMMM @ HH:mm')
    }
});

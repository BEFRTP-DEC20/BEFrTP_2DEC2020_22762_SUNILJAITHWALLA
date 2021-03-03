function RunBenchmark() {
    var suite = new Benchmark.Suite;

    suite
        // Add tests.
        .add('No tag', function() {
            $('.content').find('[name="myinput"]');
        })
        .add('With tag', function() {
            // Tags make a difference, especially when operating on a
            // container.
            $('.content').find('input[name="myinput"]');
        })
        .add('Lookup by ID', function() {
            // Approach 1.
            // The best ... ever.
            $('#myinput10');
        })
        .add('Lookup by simple attribute - v1', function() {
            // Approach 2.
            // Straight up attributes, but no native methods for this.
            $('[sectiontype="uniquename10"]').find('[name="myinput"]');
        })
        .add('Lookup by simple attribute - v2 (with tag)', function() {
            // A bit better, with the tag lookup on the container.
            $('[sectiontype="uniquename10"]').find('input[name="myinput"]');
        })
        .add('Lookup with section container - v1', function() {
            // Approach 3.
            // Another way by using a native lookup first, but this is
            // pretty bad performance-wise.
            // .filter() allows to filter down a set.
            $('.section')
                .filter('[sectiontype="uniquename10"]')
                .find('input[name="myinput"]');
        })
        .add('Lookup with section container - v2 (skip filter, access DOM directly)', function() {
            // Cheat a little here, but performance is good. Since the
            // implication that this is the 10th input in the 10th section,
            // grab the section directly instead of relying on the attribute.
            // Using the [] index notation returns the DOM element from that
            // collection.
            $($('.section')[9]).find('input[name="myinput"]');
        })
        .add('Lookup with content container', function() {
            // Approach 4.
            // Yet another way ... but performance not that great.
            $('.content')
                .children('div[sectiontype="uniquename10"]')
                .find('input[name="myinput"]');
        })
        // Add listeners.
        .on('cycle', function(event) {
            console.log(String(event.target));
        })
        .on('complete', function() {
            console.log('Fastest is ' + this.filter('fastest').map('name'));
        })
        // Run async.
        .run({ 'async': true });
}

function ChangeBorder() {
    $('#myinput10').css('border', '2px solid blue');
}

$(document).ready(function() {
    $('#run-benchmark').on('click', function() {
        RunBenchmark();
    });

    $('#change-border').on('click', function() {
        ChangeBorder();
    });
});

/****************************************************************
 * Sample run of the test - 
 * No tag x 28,381 ops/sec ±3.84% (43 runs sampled)
 * With tag x 41,786 ops/sec ±2.72% (42 runs sampled)
 * Lookup by ID x 952,643 ops/sec ±4.09% (42 runs sampled)
 * Lookup by simple attribute - v1 x 33,261 ops/sec ±10.78% (31 runs sampled)
 * Lookup by simple attribute - v2 (with tag) x 36,354 ops/sec ±10.49% (32 runs sampled)
 * Lookup with section container - v1 x 11,895 ops/sec ±12.32% (31 runs sampled)
 * Lookup with section container - v2 (skip filter, access DOM directly) x 57,213 ops/sec ±6.13% (41 runs sampled)
 * Lookup with content container x 25,421 ops/sec ±18.09% (24 runs sampled)
 * Fastest is Lookup by ID
****************************************************************/

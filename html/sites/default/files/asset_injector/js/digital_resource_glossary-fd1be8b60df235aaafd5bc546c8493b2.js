console.log('digital_resource_glossary_combined');
(function ($) {
    $(document).ready(function() {
        let originalTitles = {}; // Object to store the original HTML content of titles

        function attachDropdownRedirection() {
            $('.form-select.usa-select').change(function(event) {
                event.preventDefault();
                event.stopPropagation();
                const selectedValue = $(this).val();
                if (selectedValue !== 'All') {
                    window.location.href = `/taxonomy/term/${selectedValue}`;
                }
            });
        }

        function generateAlphabetLinks() {
            const letters = {};

            $('.digital-resource-card--title > a').each(function() {
                const titleText = $(this).text().trim();
                const firstLetter = titleText.charAt(0).toUpperCase();
                letters[firstLetter] = (letters[firstLetter] || 0) + 1;
                let titleId = $(this).closest('.digital-resource-card').attr('id');
                if (titleId) {
                    originalTitles[titleId] = $(this).html(); // Store original HTML
                }
            });

            const filterBar = $('<div id="alphabet-filter"></div>');
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
            const allLink = $('<a href="#" id="all-filter">All</a>');
            filterBar.append(allLink).append(' ');

            alphabet.forEach(function(letter) {
                let filterLink;
                if (letters[letter]) {
                    filterLink = $('<a href="#" class="active-letter"></a>').text(letter);
                } else {
                    filterLink = $('<span></span>').text(letter);
                }
                filterBar.append(filterLink).append(' ');
            });

            $('#f-1').prepend(filterBar);
        }

        function filterResources(selectedLetter) {
            $('.digital-resource-card').hide();

            $('.digital-resource-card--title > a').each(function() {
                const cardId = $(this).closest('.digital-resource-card').attr('id');
                if (cardId && originalTitles[cardId]) {
                    // Reset title to its original state without highlights
                    $(this).html(originalTitles[cardId]);
                }

                let originalText = $(this).text();
                if (selectedLetter !== 'All') {
                    let firstLetter = originalText.substring(0, 1);
                    let remainder = originalText.substring(1);

                    if (firstLetter.toUpperCase() === selectedLetter) {
                        // Highlight only the first letter if it matches
                        let highlightedText = '<span class="highlight">' + firstLetter + '</span>' + remainder;
                        $(this).html(highlightedText);
                        $(this).closest('.digital-resource-card').show();
                    }
                } else {
                    // If "All" is selected, show all without highlighting
                    $(this).closest('.digital-resource-card').show();
                }
            });
        }

        $(document).on('click', '#alphabet-filter a.active-letter, #all-filter', function(e) {
            e.preventDefault();
            const letter = $(this).attr('id') === 'all-filter' ? 'All' : $(this).text().toUpperCase();
            filterResources(letter);
        });

        attachDropdownRedirection();
        generateAlphabetLinks();

        // Re-generate alphabet links when content changes via AJAX
        $(document).ajaxSuccess(function(event, xhr, settings) {
            const targetClass = '.block-views-blockdatabase-by-subject-2-block-4';
            if (settings.url.indexOf('/views/ajax') !== -1 && $(targetClass).length) {
                generateAlphabetLinks(); // Regenerate links and re-store original titles
            }
        });
    });
})(jQuery);

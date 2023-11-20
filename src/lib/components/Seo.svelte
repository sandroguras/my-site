<script>
    //TODO need to improve wording and test out the meta tags
    import { page } from "$app/stores"
    import { browser } from "$app/environment"

    const author = "Sandro Guras";
    const baseTitle = `${author} personal website`;

    $: pageUrl = String($page.url) || "https://sandroguras.com";

    $: metaImage = $page.data.meta?.metaImage || "../../src/assets/images/social.jpg";

    $: pageDescription =
        $page.data.meta?.description ||
        "I provide reliable solutions to your web needs.";

    $: pageTitle = $page.data.meta?.title.concat(" - ", baseTitle) || baseTitle;

    $: browser && (document.title = pageTitle);
</script>

<svelte:head>
    <meta name="description" content={pageDescription} />

    <!-- Meta Data -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no"/>
    <meta name="format-detection" content="address=no"/>
    <meta name="author" content={author} />
    <meta name="description" content={baseTitle} />

    <!-- Twitter data -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content={pageUrl}>
    <meta name="twitter:title" content={pageTitle}>
    <meta name="twitter:description" content={baseTitle}>
    <meta name="twitter:image" content="../../src/assets/images/social.jpg">

    <!-- Open Graph data -->
    <meta property="og:title" content={pageTitle} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={pageUrl} />
    <meta property="og:image" content={metaImage} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:site_name" content="vCard" />

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="144x144" href="../../src/assets/images/favicons/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../../src/assets/images/favicons/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../../src/assets/images/favicons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="57x57" href="../../src/assets/images/favicons/apple-touch-icon-57x57.png">
    <link rel="shortcut icon" href="../../src/assets/images/favicons/favicon.png" type="image/png">
</svelte:head>

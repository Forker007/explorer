(function() {
	let explorerConfig = {
        theme: 'white',
        tokenName: 'BITRA',
        tokenHash: '0000000000000000000000000000000000000000000000000000000000000000',
        favicon: 'assets/images/favicon_en.ico',
        tokenLogoFileLink: 'logo-white.png',
        logoLinkTarget: 'https://bitranium.com',                    
        showExchangesSection: true,
        menuItemsVisibility: {
            showWallet: true,
            showROICalc: true,
            showHowToSwap: true
        },
        externalLinks: {
            topMenuItemsLinks: {
                walletLink: 'https://wallet.bitranium.com',
            },
            peerMapURL: 'https://pulse2.bitranium.com/',
            documents: {
                whitepaper: 'https://bitranium.com/pdf/pp_en.pdf',
            },
            projectMedia: {                            
                // facebook: 'https://www.facebook.com/bitranium',
                twitter: 'https://twitter.com/bitranium',
                medium: 'https://blog.bitranium.com/',
                github: 'https://github.com/Forker007',
                linkedin: 'https://www.linkedin.com/company/bitranium-limited/',
                youtube: 'https://www.youtube.com/channel/UCyZqNfzK_PP82nkAVOlmN4Q',
                telegram: 'https://t.me/bitranium'
            }
        },
        pagesSectionsVisibility: {
            showFullNodesCountCard: true,
            showSBlocks: true,
            showROICalc: true,
            showExchangesSection: true,
            showCurrencyToUSDAccountDetails: true,
            showTestNetDisclaimer: false
        },
        bannedAccs: [
            "036808ae1adb7604b52345694723df6b09853e9e43105add144604d382951b0df5",
            "039099794d26438ceff314524d40f96003099ba4cd0b3419062f85df32792ee139",
            "033bf7f0aabfcc5150ca32edab63062f527a0bc47b71a1ba58759c8527dc6647fa",
            "03422ba778183fe11170f39034153343ae329c5f4781262588347b53e137cd8136",
            "039a2090d69ba1d09f3dbada9b8e1cc4d30ec3188d007fa43ee2199deb50f56e8a",
            "0283101404bec6696159d3fafc2bdd8c9a5e142735ce47cbd6d053a32fd0c4fd08",
            "03b75312c96e2dbaa107fdf449377bbd049dd27d3dfec7194371c059702a39ce01",
            "02218337ec2c7bebb92497244344e5660e11fd832135a47b0eb69b688623e91c1c",
            "03586a61df7b01c620cda8bd2a0a7f7b3089d17b76e942b498a51089cca38d63d5",
        ],
        POSChallenge: {
            on: true,  
            address: '03fd7ed9000c1c3bd65fdfed52a1136c59c39f966d3a315ee54c6ea2a93eb930ee'
        },        
        themeOptions: { //this is options' storage. themeOptions' properties must be use as 'theme' value ('dark','white', etc.)
            dark: {
                cssName: 'dark-theme.css',
                cssLink: 'assets/css/'
            },
            white: {
                cssName: 'white-theme.css',
                cssLink: 'assets/css/'
            },
            white_blue: {
                cssName: 'white-blue-theme.css',
                cssLink: 'assets/css/'
            }

        }
    }
	window.explorerConfig = explorerConfig;
})();

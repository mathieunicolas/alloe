module.exports = {
    title: 'alloé',
    description: 'Allez, on écrit !',
    head: [
        ['link',
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'
            }
        ],
        ['link',
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'
            }
        ]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'blog', link: 'https://blog.alloe.fr', target: '_self' },
            { text: 'Write', link: 'https://write.alloe.fr'},
            { text: 'Social', link: 'https://social.alloe.fr'}
        ],
        sidebar: [
            '/',
            '/guide/',
            //'/guide/write',
            '/guide/writing',
            'guide/testeurs',
            /*'/guide/social',
            '/guide/48h',
            '/guide/fediverse',
            '/guide/commencer',
            {
                title: 'Test',
                sidebarDepth: '2',
                children: [
                    '/guide/',
                    '/guide/write',
                    '/guide/writing',
                ]
            }*/
        ],
    },
    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },
        extendMarkdown: md => {
            md.use(require("markdown-it-katex"));
        }

    }
};


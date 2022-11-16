import {
    defineConfig,
    presetAttributify,
    presetUno,
    presetWebFonts
} from 'unocss'

export default defineConfig({
    rules: [
        ['custom-rule', { color: 'red' }]
    ],
    shortcuts: {
        'custom-shortcut': 'text-lg text-orange hover:text-teal'
    },
    theme: {
        // ...
        colors: {
            'veryCool': '#0000ff', // class="text-very-cool"
            'brand': {
                'primary': 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"
            }
        },
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetWebFonts({
            provider: 'google', // default provider
            fonts: {
                // these will extend the default theme
                sans: 'Poppins',
                mono: ['Fira Code', 'Fira Mono:400,700'],
                // custom ones
                lobster: 'Lobster',
                lato: [
                    {
                        name: 'Lato',
                        weights: ['400', '700'],
                        italic: true,
                    },
                    {
                        name: 'sans-serif',
                        provider: 'none',
                    },
                ],
            },
        }),
    ]
})

module.exports = {
    plugins: [
        require('postcss-preset-env')({
            autoprefixer: { grid: true },
            stage: 3
        }),
        require('postcss-css-variables'),
        require('postcss-import'),
        require('postcss-color-mod-function'),
        require('cssnano')({ preset: 'default' })
    ]
};
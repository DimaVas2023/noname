const model = [
    {type: 'titleh3', value: 'Sign in'},
    {type: 'forms', value: [
        'login',
        'password',
        'sumbit' 
    ]}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    console.log(block)
})

(() => {

    pop = () => {
        document.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'f',
                ctrlKey: true
            })
        );
    }
    
    let mainLoop = setInterval(() => {

        // finding vue every loop is just better in case that it broke at the first time.
        var vue = document.getElementById('app').__vue__;

        // preventing bot detection
        vue.sequential_max_pops = 0;
        if (vue.bot) {
            console.log("Bot detected, but no more.");
            vue.bot = false;
            document.cookie = 'bot=';
        }
        
        if(vue.accumulator === 0) {
            vue.counter += 799;
            pop();
            console.log('%c[BOT] Sent 799 pops to stats server.', 'background: #000; color: #00ff00');
        }

        // set accumulator to max value
        vue.accumulator = 799;

    }, 1000)

    console.log('%c[BOT] Started BOT', 'background: #000; color: #00ff00');

    setTimeout(pop, 2000); // some time it just not detect new value that we replace, pop one time to poke it's function.
})
();

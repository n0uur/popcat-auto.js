# popcat-auto.js
Popcat.click Auto bot using Javascript :cat:

__Not working on `Mobile phone` or any `Tablet`__

__Working only on `PC` (Windows/Linux) or `Mac` devices__

## How to use
- Copy code from [Here](https://raw.githubusercontent.com/n0uur/popcat-auto.js/main/popcat.js)
- Open [popcat.click](https://popcat.click/)
- Open Inspector tool
  - __Google Chrome__ / __Firefox__ using `CTRL + Shift + I` key or `Right click` and select `Inspect`
  - __Safari (Mac OS)__ follow this instruction [Use the developer tools in the Develop menu in Safari on Mac](https://support.apple.com/guide/safari/use-the-developer-tools-in-the-develop-menu-sfri20948/mac)
- Open `Console` Tab. It always in Inspector tab, just find it.
- Paste `Code` that's you just copied it into console and press `Enter` to run it
- If it's run properly you will see `[BOT] Started BOT` in console.

## How it work ?
This code will loop every 1 second to replace number that will send to server to `Max` value that server will accept. in this case is `799`

### Why 799 ? Not 800

```js
// This code is from popcat.click
if (this.accumulator >= 800) {
    this.sequential_max_pops += 1
    if (this.sequential_max_pops > 10) { // 20*30 seconds = 5 minutes
        this.bot = true
        setCookie('bot', true, 0.5) // Cookie lasts for 12 hours
    }
} else {
    this.sequential_max_pops = 0
    this.bot = false
}
```
As you can see, It's `>= 800` not `> 800`, So 800 will be detected as a BOT

### Your code just have bot spoofing. Why not 800 ?
__FIRST STOP BEING GREEDY. SECOND DO NOT TRUST MYCODE AND MORE IMPORTANT DO NOT TRUST `JAVASCRIPT`!__

![POPCAT](https://i.imgur.com/L8WjVld.png)

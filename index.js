const spawn = require("child_process").spawn;

module.exports = {
    clone: function () {
        let opts = process.argv.slice(2);
        opts[1] = opts[1].replace("github.com", "github.com.cnpmjs.org");
        console.log("git " + opts.join(" "));
        spawn("git", opts, {
            stdio: "inherit",
            shell: true,
        });
    },
};

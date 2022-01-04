function marksListener(details) {
  console.log("Intercepted " + details.url);

  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  let data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = (event) => {
    let str = "";
    if (data.length == 1) {
      str = decoder.decode(data[0]);
    } else {
      for (let i = 0; i < data.length; i++) {
        let stream = i == data.length - 1 ? false : true;
        str += decoder.decode(data[i], { stream });
      }
    }

    var parsed = JSON.parse(str);

    for (key in parsed.data.parametrage) {
      if (
        key != "affichagePositionMatiere" &&
        key.toLowerCase().split("uniquement").length == 1
      ) {
        // Only executed if the parameter doesn't restrict the user to some things
        // (Contains the word "uniquement")
        if (!parsed.data.parametrage[key]) {
          parsed.data.parametrage[key] = true;
        }
      }
    }

    filter.write(encoder.encode(JSON.stringify(parsed)));
    filter.close();
    console.log("Finished request to " + details.url);
  };
}

browser.webRequest.onBeforeRequest.addListener(
  marksListener,
  {
    urls: ["https://api.ecoledirecte.com/v3/eleves/*/notes.awp*"],
  },
  ["blocking"]
);

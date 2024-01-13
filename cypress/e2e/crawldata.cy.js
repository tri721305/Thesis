// googleMaps.spec.js
describe("Google Maps Tests", () => {
  it("Collects coordinates from Google Maps", () => {
    cy.fixture("dvhcvn.json").then((locations) => {
      // Duyệt qua từng địa danh trong tệp JSON
      locations.data.forEach((location) => {
        // Gửi yêu cầu tìm kiếm địa danh trong Google Maps
        it("Call API", () => {
          let endData = location.name;
          cy.wrap(endData)
            .each((address, i) => {
              cy.then(() => {
                cy.request(
                  `https://nominatim.openstreetmap.org/search?q=${encodeURI(
                    address.search
                  )}&format=json`
                ).then((response) => {
                  endData = endData.map((itm, idx) =>
                    idx == i
                      ? response?.body.length > 0
                        ? { ...response.body[0], name: itm.search }
                        : null
                      : itm
                  );
                });
              });
            })
            .then(() => {
              const filterData = endData.filter((item) => item.image);
              cy.writeFile("placeInfoImage.json", filterData);
              console.log(filterData, "res");
            });
        });

        // Chờ cho kết quả xuất hiện và thu thập tọa độ
      });
    });
  });
});

// Hàm trích xuất tọa độ từ URL Google Maps
function extractCoordinatesFromURL(url) {
  const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
  const matches = url.match(regex);
  if (matches && matches.length === 3) {
    const latitude = parseFloat(matches[1]);
    const longitude = parseFloat(matches[2]);
    return `Latitude: ${latitude}, Longitude: ${longitude}`;
  }
  return "Coordinates not found";
}

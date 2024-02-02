const blob = document.getElementById("blob");

const updateBlobPosition = (e) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const blobWidth = blob.offsetWidth;
    const blobHeight = blob.offsetHeight;

    const minLeft = blobWidth;
    const maxLeft = windowWidth - blobWidth;
    const maxTop = windowHeight - blobHeight;

    const clientX = Math.min(windowWidth, e.clientX);
    const clientY = Math.min(windowHeight, e.clientY);

    const left = Math.min(maxLeft, Math.max(minLeft, clientX, blobWidth / 2));
    const top = Math.min(clientY, maxTop);

    blob.animate(

        {
            left: `${left}px`,
            top: `${top}px`
        },

        {
            duration: 3000,
            fill: "forwards"
        }

    );

};

window.onpointermove = updateBlobPosition;
window.onresize = updateBlobPosition;
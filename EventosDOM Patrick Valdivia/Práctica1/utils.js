document.addEventListener('keydown', async function(event) {
    if (event.ctrlKey && event.key === 'b') {
        try {
            //We use fetch to get the image URL
            const response = await fetch('https://picsum.photos/1920/1080');
            
            //If we get a response, we can get the URL of the image
            if (response.ok) {
                //We got the url from the response
                const imageUrl = response.url;
                
                //We set the image url as the background image
                document.getElementById('imagen').style.backgroundImage = `url('${imageUrl}')`;
            
            }
        } catch (error) {
            console.error('There was an error:', error);
        }
    }
});
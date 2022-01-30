function preload()
{

}

function setup()
{
    canvas = createCanvas(600, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    Image(video, 0, 0, 600, 450)
}

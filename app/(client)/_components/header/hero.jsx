import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <>
      <div className="w-full flex h-[350px] md:h-[calc(100vh-100px)] relative bg-hero-pattern bg-cover deals-section">
        <div className="md:w-[1200px] flex  md:ml-[200px] flex-col md:mt-[150px] text-white z-10  justify-center md:justify-normal px-[20px] md:px-0">
          <h2
            className={cn(
              `${playfair.className} text-[40px] md:text-[80px] font-[900] leading-tight`
            )}
          >
            Fame <br />
            Royal Travels.
          </h2>
          <p className={cn(`${work_sans.className} text-[17px]`)}>
            We operate with unwavering commitment to: <br />
            professionalism,integrity, deligence and transparency.
          </p>
        </div>
        <div className="hidden md:flex md:flex-col md:absolute md:top-20 md:right-[100px] w-full max-w-[400px] h-[480px] boxShadow px-5 py-3 bg-[whitesmoke] rounded-[3px] gap-y-3 z-10">
          <h2 className={cn(`${playfair.className} text-[40px] font-[900]`)}>
            Get Quote
          </h2>
          <div className="py-4 flex flex-col gap-y-2">
            <Label htmlFor="email">Your email address</Label>
            <Input name="email" />
            <Label htmlFor="email">Your email address</Label>
            <Input name="email" />
            <Label htmlFor="email">Your email address</Label>
            <Input name="email" />
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
            <Button className="btn-default bg-[--light-yellow-text] hover:bg-[--btn-hover]">
              Send message
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

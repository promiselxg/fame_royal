import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <>
      <div className="w-full flex h-[calc(100vh-100px)] relative bg-hero-pattern bg-cover">
        <div className="absolute w-full top-0 bottom-0 bg-[rgba(0,0,0,0.2)]"></div>
        <div className="w-[1200px] flex  ml-[200px] flex-col mt-[150px] text-white z-10">
          <h2
            className={cn(
              `${playfair.className} text-[80px] font-[900] leading-tight`
            )}
          >
            Explore <br />
            Your Travel
          </h2>
          <p className={cn(`${work_sans.className} text-[17px] ml-[12px]`)}>
            Discover your next great adventure, become an explorer to get
            started!
          </p>
        </div>
        <div className="md:absolute md:top-20 md:right-[100px] w-full max-w-[400px] h-[480px] boxShadow px-5 py-3 bg-[whitesmoke] rounded-[3px] gap-y-3 z-10">
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

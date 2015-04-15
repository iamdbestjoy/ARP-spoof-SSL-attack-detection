
#!/bin/bash
arp -an | awk '{print $4}' | sort | uniq -c | grep -v ' 1 '
 
if [ "$?" -eq 0 ]
then
        /usr/bin/zenity  --warning  --text="Arp Spoofing is detected. You will be disconnected from the network for your safety" --title="Phishing Warning"
sudo ifconfig lo down
fi

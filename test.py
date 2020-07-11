import re

def pre_process_minimal(text):
    text = text.lower()
    text = re.sub(r"""[,.;@#?!&$]+\ *"""," ",text, flags=re.VERBOSE)
    return text

def get_sets(text1, text2):
    '''
        get sets for original : text1, and recorded : text2
    '''
    text1 = pre_process_minimal(text1)
    text2 = pre_process_minimal(text2)
    text1 = text1.split()
    text2 = text2.split()
    para1 = []
    para2 = []
    for i in range(0,len(text1)):
        if text1[i] not in text2:
            para1.append({text1[i] : i})
    for i in range(0,len(text2)):
        if text2[i] not in text1:
            para2.append({text2[i] : i})           
    req = {'para-1' : para1, 'para-2' : para2}
    return req

print(get_sets("Like sharks, snakes, and spiders, piranhas are widely feared. Although most people consider piranhas to be quite dangerous, they are, for the most part, entirely harmless. Piranhas rarely feed on large animals; they eat smaller fish and aquatic plants. When confronted with humans, piranhas’ first instinct is to flee, not attack. Their fear of humans makes sense. Far more piranhas are eaten by people than people are eaten by piranhas. If the fish are well-fed, they won’t bite humans.",
"like socks snakes and spiders piranhas are widely field although most people consider fairness to be quite dangerous they are for the most part entirely harmless. Aiden has really filled on large animals eat smaller face and aquatic plants when confronted with humans are on his first instinct is to flee not attacked humans make sense. Farmers Furniture eaten by people than people are eaten by piranhas. if the freezer Wilfred they won't bite humans."))    
#returning tuple of sets
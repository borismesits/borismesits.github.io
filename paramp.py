import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

class Sim():
    def __init__(self): 
        self.x = np.linspace(0,10,101) 
        self.y = np.cos(self.x) 
        
        
    def init(self, line):
        self.line = line
        self.line.set_ydata(self.y) 
        return self.line
        
    def iterate(self, i):
        self.y = np.random(101)
        self.line.set_ydata(self.y) 
        return self.line
        

sim = Sim()
fig, ax = plt.subplots()

line, = ax.plot(sim.x, sim.y)
sim.init(line)

ani = animation.FuncAnimation (fig, sim.iterate, np.arange(1, 200), init_func=init,interval=25, blit=True)
plt.show()
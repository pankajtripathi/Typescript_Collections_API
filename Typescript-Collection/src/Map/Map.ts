export interface Map<K,V>{
    
    /*
     *Inserts value v, with key k and returns the stored value 
     */
    put(key:K,value:V):V;
    
   /*
    * Clears map collection, returns true if succeeds in doing so else false 
    */
    clear():boolean;
    
   /*
    * returns true if map conatins the supplied key, K.
    */
    containsKey(key:K):boolean;
    
   /*
    * returns true if map contains the supplied value, V 
    */    
    containsValue(value:V):boolean;
    
   /*
    * returns true if map is empty
    */
    isEmpty():boolean;
    
   /*
    * returns the number of entries in map
    */
    size():number;
    
    /*
     * returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
     */
    get(key:K):V;
}
import pool from "../database2/db.js";

export const getPost = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM posts');
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  
  export const agregarPost = async (req, res) => {
    try {
      const { titulo, img, descripcion } = req.body;
      const result = await pool.query(
        'INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *',
        [titulo, img, descripcion]
      );
      res.status(201).json(result.rows[0]);
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  
  export const like = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await pool.query(
        'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
        [id]
      );
      if (result.rows.length === 0) {
        res.status(404).json({ message: 'Post not found' });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



  export const eliminarPost =async (req, res) => {
    try {
      const { id } = req.params;
      const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        res.status(404).json({ message: 'Post not found' });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export const notFund = (req,res) => res.status(404).json({ message: 'Route not found' });
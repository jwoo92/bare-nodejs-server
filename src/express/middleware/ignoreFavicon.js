function ignoreFavicon(req, res, next) {
  if (req.originalUrl.includes('favicon.ico')) {
    res.status(204).end();
    return;
  }

  next();
}

export default ignoreFavicon;
